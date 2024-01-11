import './video.scss'
import video from '../assets/video.jpg'


export const Video = () => {

    return (
        <section className="videoCont h-auto max-w-xl rounded border p-1 dark:border-neutral-700 dark:bg-neutral-800">
            <img src={video}></img>
        </section>
    )
}