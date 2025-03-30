import {RiReactjsLine} from "react-icons/ri"
import {SiJavascript, SiMongodb,  SiExpress, SiMysql, SiPython} from "react-icons/si"
import {FaNodeJs, FaJava} from "react-icons/fa"
import {motion} from "framer-motion"

const iconvariants = (duration) => ({
    initial:{y: -10},
    animate:{
        y:[10, -10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})
function Technologies(){
    return(
    <div className="pb-24"> 
        <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconvariants(2.5)}>
                    <RiReactjsLine className="text-6xl text-cyan-500 hover:text-cyan-700"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconvariants(2.5)}
                className="p-4">
                    <SiMongodb className="text-6xl text-green-500 hover:text-green-700"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconvariants(2.5)}
                className="p-4">
                    <FaNodeJs className="text-6xl text-green-500 hover:text-green-700"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconvariants(2.5)}
                className="p-4">
                    <SiJavascript className="text-5xl text-yellow-500 hover:text-yellow-700"/>
                </motion.div> 

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconvariants(2.5)}
                className="p-4">
                    <SiExpress className="text-5xl text-yellow-500 hover:text-yellow-700"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconvariants(2.5)}
                className="p-4">
                    <FaJava className="text-5xl text-blue-500 hover:text-blue-700"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconvariants(2.5)}
                className="p-4">
                    <SiMysql className="text-7xl text-green-500 hover:text-green-700"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconvariants(2.5)}
                className="p-4">
                    <SiPython className="text-5xl text-blue-400 hover:text-blue-700"/>
                </motion.div>
                
            </motion.div>
            
    </div>
    )
}
export default Technologies;