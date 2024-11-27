import React, { useState } from 'react';

import * as Icons from '@/components';
import { useData } from '@/components/context/DataContext';

const Skill = ({ skill, className }) => {
  const IconComponent = Icons[skill.iconComponent];

  return (
    <div className={className}>
      {IconComponent && (
        <IconComponent className="w-10 h-10 text-white" 
        width="30px"
        height="30px"/>
      )}
      <span className="text-sm text-white">{skill.name}</span>
    </div>
  );
};

export default Skill;