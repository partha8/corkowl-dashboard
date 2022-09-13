import styles from './sidebar.module.css'

export const SidebarItem = ({icon,name,active}) => {
  return (
    <div className={`${styles.sidebarItem} ${active && styles.active}`}>
        <span className={styles.icon}>{icon}</span>
        <h4>{name}</h4>
    </div>
  )
}
