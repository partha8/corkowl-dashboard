import styles from './sidebar.module.css'
import { SidebarItem } from './SidebarItem'
import {MdOutlineDashboard} from 'react-icons/md'
import {TbStack2} from 'react-icons/tb'
import {FiShoppingBag, FiUsers} from 'react-icons/fi'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <SidebarItem name='Dashboard' icon={<MdOutlineDashboard/>} active />
      <SidebarItem name='Inventory' icon={<TbStack2/>} />
      <SidebarItem name='Orders' icon={<FiShoppingBag/>} />
      <SidebarItem name='Customers' icon={<FiUsers/>} />
      <SidebarItem name='Reports' icon={<HiOutlineDocumentText/>} />
      <SidebarItem name='Settings' icon={<AiOutlineSetting/>} />

    </aside>
  )
}
