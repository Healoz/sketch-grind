import React, { FC } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import UploadImage from './image-upload/UploadImage';
import MainHeading from '../../MainHeading';
import ImagePreview from './image-upload/ImagePreview';

interface SessionSetupProps {
    preview: string | ArrayBuffer | null;
    setPreview: (preview: string | ArrayBuffer | null) => void;
    setSessionStarted: (sessionStarted: boolean) => void;
}

const SessionSetup: FC<SessionSetupProps> = ({preview, setPreview, setSessionStarted}) => {

  return (
    <div>
          <MainHeading />
          <AnimatePresence>
            {preview ? (
              <motion.div
                key={1}
                initial={{ opacity: 0, x: 600, y: 50, scale: 1 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: { delay: 0.31 },
                }}
                exit={{ opacity: 0, scale: 0, rotate: 180, x: -100, y: -100 }}
                transition={{
                  duration: 0.3,
                }}
              >
                <ImagePreview preview={preview} setPreview={setPreview} setSessionStarted={setSessionStarted} />
              </motion.div>
            ) : (
              <motion.div
                key={2}
                initial={{ opacity: 0, x: -600, y: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { delay: 0.31 },
                }}
                exit={{ opacity: 0, x: -600, y: -50 }}
                transition={{
                  duration: 0.3,
                }}
              >
                <UploadImage setPreview={setPreview} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
  )
}

export default SessionSetup