import MainMenuItem from '@/Components/Menu/MainMenuItem';
import { Building, CircleGauge, Printer, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";


interface MainMenuProps {
  className?: string;
}

export default function MainMenu({ className }: MainMenuProps) {
  return (
    <div className={className}>
      {/* <MainMenuItem
        text="Dashboard"
        link="dashboard"
        icon={<CircleGauge size={20} />}
      />
      <MainMenuItem
        text="Organizations"
        link="organizations"
        icon={<Building size={20} />}
      />
      <MainMenuItem
        text="Contacts"
        link="contacts"
        icon={<Users size={20} />}
      />
      <MainMenuItem
        text="Reports"
        link="reports"
        icon={<Printer size={20} />}
      />
       */}

       <Sidebar className='fixed z-40 top-16 left-0 md:left-0 lg:left-0 w-full md:w-56 lg:w-56 h-screen transition-transform  bg-white border-r border-gray-200 translate-x-0 duration-500'>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarCollapse icon={HiShoppingBag} label="E-commerce">
                <SidebarItem href="#">Products</SidebarItem>
                <SidebarItem href="#">Sales</SidebarItem>
                <SidebarItem href="#">Refunds</SidebarItem>
                <SidebarItem href="#">Shipping</SidebarItem>
              </SidebarCollapse>
              <SidebarItem href="#" icon={HiInbox}>
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>
              <SidebarItem href="#" icon={HiShoppingBag}>
                Products
              </SidebarItem>
              <SidebarItem href="#" icon={HiArrowSmRight}>
                Sign In
              </SidebarItem>
              <SidebarItem href="#" icon={HiTable}>
                Sign Up
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
    </div>
  );
}
