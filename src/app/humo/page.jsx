import styles from './styles.module.css'
export default function Humo(){
    return(
        <main className="min-h-screen flex flex-col items-center bg-gray-700">
            <img className={styles.img} src="./min.gif" alt="" />
            <img className={styles.img} src="./fon.png" alt="" />
            <img className={styles.hum} src="./hum.png" alt="" />
            <div className={styles.div}>

            </div>
        </main>
    )
}