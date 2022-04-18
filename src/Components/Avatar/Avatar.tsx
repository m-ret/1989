import { Avatar, AvatarProps, ThemingProps } from '@chakra-ui/react';
import React from 'react';

const source = 'https://avatars.githubusercontent.com/u/8395866?s=400&u=c9f0cc5fbab06150c8034c120e6466a4b9b5361a&v=4';

export const AvatarC = ({ size = 'xl', src = source, ...rest }: ThemingProps & AvatarProps) => (
  <Avatar size={size} src={src} {...rest} />
);
