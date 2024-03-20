import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
  DrawerPortal,
} from "@/components/ui/drawer"
import { HiOutlinePlusCircle } from "react-icons/hi";
import { isObjectEmpty } from "@/libs/utils";

export default function Dialog(props) {
  const { data } = props;
  const isEdit = isObjectEmpty(data);
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="gap-1">
          <HiOutlinePlusCircle size={20} />
          {`${isEdit && 'Add User'}`}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="ml-[50%] h-full rounded-r-none">
        <div className="">
          <DrawerHeader>
            <DrawerTitle>{`${isEdit ? 'Add User' : 'Edit User'}`}</DrawerTitle>
            <DrawerDescription>Manage user authentication</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div>Ini content</div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};