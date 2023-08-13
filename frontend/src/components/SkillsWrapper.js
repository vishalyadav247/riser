import React from 'react';
import Box from '@mui/material/Box';
import SkillCard from './SkillCard';
import Skill1 from '../images/html.png';
import Skill2 from '../images/css.png';
import Skill3 from '../images/javascript.png';
import Skill4 from '../images/react.png';
import Skill5 from '../images/wordpress.png';
import Skill6 from '../images/shopify.png';
import Skill8 from '../images/aws.png';
import Skill9 from '../images/git.png';

export default function SkillsWrapper() {
  const TeamCardWrapperCss={
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
    maxWidth:'1200px',
    margin:'auto',
    rowGap:'30px'
  }
  return (
    <Box sx={TeamCardWrapperCss}>
      <SkillCard image={Skill1} />
      <SkillCard image={Skill2} />
      <SkillCard image={Skill3} />
      <SkillCard image={Skill4} />
      <SkillCard image={Skill5} />
      <SkillCard image={Skill6} />
      <SkillCard image={Skill8} />
      <SkillCard image={Skill9} />
    </Box>
  )
}
