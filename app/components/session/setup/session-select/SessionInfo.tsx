import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import React, { FC } from 'react'

interface SessionInfoProps {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    children?: React.ReactNode;
}

const SessionInfo: FC<SessionInfoProps> = ({ icon: Icon, children }) => {
    
  return (
    <div className="flex gap-2 text-sm items-center">
        <Icon className="text-sm"></Icon>
        <p>{children}</p>
    </div>
  )
}

export default SessionInfo