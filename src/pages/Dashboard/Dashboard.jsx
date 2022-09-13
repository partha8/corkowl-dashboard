import styles from './dashboard.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { OverviewCard } from './OverviewCard'
import {BsBasket2} from 'react-icons/bs'
import {TbTruck} from 'react-icons/tb'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {MdOutlineCancel,MdOutlineCheckCircle} from 'react-icons/md'

export const Dashboard = () => {
  return (
    <main className="main">
        <section className={styles.overviewHeader}>
            <h3>Overview</h3>
            <button className="btn cta" > <AiOutlinePlusCircle className='icon-resize'/> ADD NEW WINE</button>
        </section>

        <section className={styles.overviewCards} >
          <OverviewCard name='Open orders' number='239' icon={<BsBasket2/>} color='--warning-color' />

          <OverviewCard name='Orders in transit' number='126' icon={<TbTruck/>} color='--info-color'  />
          
          <OverviewCard name='Fulfilled orders' number='1254' icon={<MdOutlineCheckCircle/>} color='--success-color' />

          <OverviewCard name='Cancelled orders' number='35' icon={<MdOutlineCancel/>}  color='--primary-color'/>
        </section>
    </main>
  )
}
