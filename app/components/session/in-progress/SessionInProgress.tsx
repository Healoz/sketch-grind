import React, { FC } from 'react';
import SessionTimer from './session-timer/SessionTimer';
import StepName from './StepName';
import { StepType } from '@/app/types/StepType';

interface SessionInProgressProps {
    preview: string | ArrayBuffer | null;
}

const SessionInProgress: FC<SessionInProgressProps> = ({ preview }) => {
  return (
    <div>
        <StepName stepType={StepType.STUDY}>Step name</StepName>
        <SessionTimer />
    </div>
    
  )
}

export default SessionInProgress