import { Users, UserPlus, Briefcase, Clock, Bell, Search, Plus, FileText, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
// @ts-ignore
import tokens from "jamie-tokens/tokens.json";

const stats = [
  { label: "Total Employees", value: "248", icon: Users, change: "+12 this quarter" },
  { label: "New Hires", value: "18", icon: UserPlus, change: "This month" },
  { label: "Open Positions", value: "7", icon: Briefcase, change: "3 urgent" },
  { label: "Attendance Rate", value: "96.2%", icon: Clock, change: "+1.4% vs last month" },
];

const employees = [
  { name: "Sarah Chen", dept: "Engineering", status: "Active", initials: "SC" },
  { name: "Marcus Johnson", dept: "Design", status: "Active", initials: "MJ" },
  { name: "Priya Patel", dept: "Marketing", status: "On Leave", initials: "PP" },
  { name: "James Wilson", dept: "Engineering", status: "Active", initials: "JW" },
  { name: "Aisha Khan", dept: "HR", status: "Active", initials: "AK" },
  { name: "Tom Rivera", dept: "Sales", status: "Remote", initials: "TR" },
];

const chartData = [
  { dept: "Eng", count: 82 },
  { dept: "Design", count: 34 },
  { dept: "Marketing", count: 28 },
  { dept: "Sales", count: 45 },
  { dept: "HR", count: 19 },
  { dept: "Finance", count: 22 },
  { dept: "Ops", count: 18 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <header className="sticky top-0 z-10 border-b bg-card/80 backdrop-blur-sm">
        <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg h-9 w-9 bg-primary">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">HR Platform</span>
          </div>
          <div className="items-center flex-1 hidden max-w-md gap-2 mx-8 md:flex">
            <div className="relative w-full">
              <Search className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
              <Input placeholder="Search employees…" className="pl-9 bg-secondary/50" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                3
              </span>
            </Button>
            <Avatar className="border-2 h-9 w-9 border-primary/30">
              <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 mx-auto space-y-8 max-w-7xl">
        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={stat.label} className="overflow-hidden">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                  </div>
                  <div
                    className={`rounded-xl p-2.5 ${
                      i === 0
                        ? "bg-primary-300 text-primary-900"
                        : i === 1
                        ? "bg-primary-400 text-primary-900"
                        : i === 2
                        ? "bg-primary-300 text-primary-900"
                        : "bg-primary-400 text-primary-900"
                    }`}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Employee Table */}
          <Card className="lg:col-span-3">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Recent Employees</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/40 hover:bg-secondary/40">
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((emp) => (
                    <TableRow key={emp.name}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs font-semibold bg-primary-400 text-primary-900">
                              {emp.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{emp.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{emp.dept}</TableCell>
                      <TableCell>
                        <Badge
                          variant={emp.status === "Active" ? "default" : "secondary"}
                          className={
                            emp.status === "Active"
                              ? "bg-primary-600 hover:bg-primary-700 text-primary-50"
                              : emp.status === "On Leave"
                              ? "bg-primary-400 text-primary-900 hover:bg-primary-500"
                              : "bg-primary-300 text-primary-900 hover:bg-primary-400"
                          }
                        >
                          {emp.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Chart */}
          <Card className="lg:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Headcount by Dept</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData} margin={{ top: 4, right: 4, bottom: 4, left: -12 }}>
                  <XAxis dataKey="dept" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                      fontSize: 13,
                    }}
                  />
                  <Bar dataKey="count" fill={tokens.core.colors.primary["600"].$value} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Plus className="w-4 h-4" /> Add Employee
              </Button>
              <Button variant="outline" className="border-primary-500 text-primary-600 hover:bg-primary-600 hover:text-primary-50">
                <Briefcase className="w-4 h-4" /> Post Job
              </Button>
              <Button variant="outline" className="border-primary-500 text-primary-600 hover:bg-primary-600 hover:text-primary-50">
                <DollarSign className="w-4 h-4" /> Run Payroll
              </Button>
              <Button variant="outline" className="border-primary-500 text-primary-600 hover:bg-primary-600 hover:text-primary-50">
                <FileText className="w-4 h-4" /> Generate Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
