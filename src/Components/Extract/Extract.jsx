import React from 'react';
import {Box, Button} from '../UI/index';
import {extratoLista} from '../../info.js'
import Items from '../Items/Items'

export default function Extract () {

  return (

        <Box>
          {extratoLista.updates.map(({id, type, from, value, date})=> {
            return (
                <Items 
                key={id}
                type={type}
                from={from}
                value={value}
                date={date}>
                </Items>
            )
          })}

          <Button>Ver Mais</Button>
        </Box>

  )

}