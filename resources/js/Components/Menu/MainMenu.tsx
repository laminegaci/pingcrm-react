import MainMenuItem from '@/Components/Menu/MainMenuItem';
import { Building, CircleGauge, Printer, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUsers, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link } from '@inertiajs/react';


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

       <Sidebar className='fixed z-40 top-16 left-0 md:left-0 lg:left-0 w-full md:w-60 lg:w-60 h-screen transition-transform  bg-white border-r border-gray-200 translate-x-0 duration-500'>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                <Link
                  href={route('dashboard')}
                  className="flex items-center group py-3 space-x-3">Dashboard
                </Link>
              </SidebarItem>

              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>

              <SidebarCollapse icon={HiShoppingBag} label="Ventes">
                <SidebarItem href="#">Liste des clients</SidebarItem>
                <SidebarItem href="#">Devis</SidebarItem>
                <SidebarItem href="#">Commandes</SidebarItem>
                <SidebarItem href="#">Factures</SidebarItem>
                <SidebarItem href="#">Paiements</SidebarItem>
              </SidebarCollapse>

              <SidebarCollapse icon={HiShoppingBag} label="Achats">
                <SidebarItem href="#">Fournisseurs</SidebarItem>
                <SidebarItem href="#">Commandes dachat</SidebarItem>
                <SidebarItem href="#">Réceptions</SidebarItem>
                <SidebarItem href="#">Factures fournisseur</SidebarItem>
                <SidebarItem href="#">Paiements</SidebarItem>
              </SidebarCollapse>

              <SidebarCollapse icon={HiShoppingBag} label="Communication">
                <SidebarItem href="#">Messagerie interne</SidebarItem>
                <SidebarItem href="#">Commandes dachat</SidebarItem>
                <SidebarItem href="#">Annonces</SidebarItem>
                <SidebarItem href="#">Factures fournisseur</SidebarItem>
                <SidebarItem href="#">Paiements</SidebarItem>
              </SidebarCollapse>

              <SidebarItem href="#" icon={HiInbox}>
                Inbox
              </SidebarItem>
              
              <SidebarItem href="#" icon={HiShoppingBag}>
                Products
              </SidebarItem>
            </SidebarItemGroup>

            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Paramètres généraux
              </SidebarItem>
              <SidebarItem href="#" icon={HiViewBoards}>
                Gestion des utilisateurs
              </SidebarItem>
              <SidebarItem href="#" icon={BiBuoy}>
                Permissions d’accès
              </SidebarItem>
              <SidebarItem href="#" icon={BiBuoy}>
                Journaux d’activité
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
    </div>
  );
}
