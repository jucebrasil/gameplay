import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
//import PlayerSvg from '../../assets/player.svg';
//import CalendarSvg from '../../assets/calendar.svg';

export function GuildIcon(){
    const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18ZvKilX0wFIbsBucX_Zm_hckpHx7tFowPA&usqp=CAU';
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
            
        
        
        />
  );
}