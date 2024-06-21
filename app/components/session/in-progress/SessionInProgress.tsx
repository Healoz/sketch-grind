import React, { FC } from 'react';
import SessionTimer from './session-timer/SessionTimer';

interface SessionInProgressProps {
    preview: string | ArrayBuffer | null;
}

const SessionInProgress: FC<SessionInProgressProps> = ({ preview }) => {
  return (
    <div>
        <SessionTimer />
    </div>
    
  )
}

export default SessionInProgress