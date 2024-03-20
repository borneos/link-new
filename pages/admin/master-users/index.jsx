import Layout from "../layout";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent,
  DropdownMenuTrigger, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

import { HiOutlinePlusCircle } from "react-icons/hi";
import DataTable from "./data-table";
import { HiOutlinePencil, HiOutlineMenu, HiOutlineTrash } from "react-icons/hi";
import Dialog from "./dialog";

export default function MasterUsers() {
  const data = [
    {
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Sudrajat Nugraha",
      email: "drajat@gmail.com",
      date: "23-Jan-2023"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Agung Kurniawan",
      email: "agung@yahoo.com",
      date: "20-Jan-2023"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Kahar Muzakir",
      email: "kahar@borneos.co",
      date: "23-Jan-2023"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Eka Jati Winarmo",
      email: "eka@gmail.com",
      date: "01-Des-2022"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Eka Jati Winarmo",
      email: "eka@gmail.com",
      date: "01-Des-2022"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Eka Jati Winarmo",
      email: "eka@gmail.com",
      date: "01-Des-2022"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Eka Jati Winarmo",
      email: "eka@gmail.com",
      date: "01-Des-2022"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Eka Jati Winarmo",
      email: "eka@gmail.com",
      date: "01-Des-2022"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Eka Jati Winarmo",
      email: "eka@gmail.com",
      date: "01-Des-2022"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Eka Jati Winarmo",
      email: "eka@gmail.com",
      date: "01-Des-2022"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Eka Jati Winarmo",
      email: "eka@gmail.com",
      date: "01-Des-2022"
    },{
      id: "1021jh-hdhjsd-sdasd23-87712h",
      name: "Eka Jati Winarmo",
      email: "eka@gmail.com",
      date: "01-Des-2022"
    }
  ]

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Fullname",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "date",
      header: "Created At",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const data = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                Actions
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => alert(data.id)}
              >
                <HiOutlinePencil size={15} />
                <span className="pl-2">Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HiOutlineMenu size={15} />
                <span className="pl-2">Detail</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HiOutlineTrash size={15} />
                <span className="pl-2">Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ];

  return(
    <Layout title="Master User">
      <div className="space-between flex items-center">
        Filter Area
        <div className="ml-auto mr-4">
          {/* <Button className="gap-1">
            <HiOutlinePlusCircle size={20} />
            Add User
          </Button> */}
          <Dialog />
        </div>
      </div>
      <div className="">
        <DataTable columns={columns} data={data} />
      </div>
    </Layout>
  )
}