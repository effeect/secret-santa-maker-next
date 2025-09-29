// For the home page
import styles from "../styles/heroHeader.module.css";

export default function HeroHeader() {
  return (
    <section className={`${styles.animateGradient} min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-6 text-center justify-center flex`}>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>

        </div>

        {/* Results */}
        <div className="text-gray-800 dark:text-gray-200">
          
        </div>
      </div>
    </section>
  );
}