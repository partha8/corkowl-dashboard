import styles from './dashboard.module.css'

export const OverviewCard = ({name,number,icon,color}) => {
  return (
    <div style={{borderTop:`2px solid var(${color})`}} className={styles.overviewCard}>
        <div className={styles.overviewInfo}>
            <p>{name}</p>
            <span style={{color:`var(${color})`}} className='icon-resize'>{icon}</span> 
        </div>
        <h2>{number}</h2>
    </div>
  )
}
