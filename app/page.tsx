import {
  SidebarProvider,
  SidebarInset,
} from "@workspace/components/ui/sidebar";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
// Menu items
const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/components/ui/sidebar";

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@workspace/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@workspace/components/ui/table";
import { ChartContainer } from "@workspace/components/ui/chart";

export default function MainPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <main className="flex-1 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,245</div>
                  <div className="text-muted-foreground">Active this month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8,320</div>
                  <div className="text-muted-foreground">Total uploaded</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">32 GB</div>
                  <div className="text-muted-foreground">Used</div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>File Uploads (Monthly)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}}>
                    {/* Chart content here, e.g. <BarChart> ... */}
                    <div className="flex items-center justify-center h-40 text-muted-foreground">
                      Chart Placeholder
                    </div>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Size</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>report.pdf</TableCell>
                        <TableCell>2025-07-29</TableCell>
                        <TableCell>2.1 MB</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>image.png</TableCell>
                        <TableCell>2025-07-28</TableCell>
                        <TableCell>1.2 MB</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>data.xlsx</TableCell>
                        <TableCell>2025-07-27</TableCell>
                        <TableCell>3.4 MB</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
