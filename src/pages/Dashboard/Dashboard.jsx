import styles from './dashboard.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

export const Dashboard = () => {
  return (
    <main className="main">
        <div className={styles.overviewHeader}>
            <h3>Overview</h3>
            <button className="btn cta" > <AiOutlinePlusCircle className='icon-resize'/> ADD NEW WINE</button>
        </div>
    </main>
  )
}
