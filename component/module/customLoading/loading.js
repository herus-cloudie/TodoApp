import styles from './loading.module.css'

export default function Loading(){
    return(
        <div className={styles.spinner}>
            <div className={styles.ldio}>
                <div style={{left:'20.900000000000002px' , top : '20.900000000000002px' , animationDelay : '0s'}}></div>
                <div style={{left:'44px' , top : '20.900000000000002px' , animationDelay : '0.125s'}}></div>
                <div style={{left:'67.10000000000001px' , top : '20.900000000000002px' , animationDelay : '0.25s'}}></div>
                <div style={{left:'20.900000000000002px' , top : '44px' , animationDelay : '0.875s'}}></div>
                <div style={{left:'67.10000000000001px' , top : '44px' , animationDelay : '0.375s'}}></div>
                <div style={{left:'20.900000000000002px' , top : '67.10000000000001px' , animationDelay : '0.75s'}}></div>
                <div style={{left:'44px' , top : '67.10000000000001px' , animationDelay : '0.625s'}}></div>
                <div style={{left:'67.10000000000001px' , top : '67.10000000000001px' , animationDelay : '0.5s'}}></div>
            </div>
        </div>
    )
}
