import React from 'react'
import { View, Text } from 'react-native'
import { Headline } from '../../../library'
import { styles } from './style'

export  function Question() {
    return (
        <View style={styles.QuestionContainer}>
        <Headline>
          {
            "فقط با افراد خاصی آن هم در شرایط خاصی می توانید زیاد صحبت کنید؟"
          }
        </Headline>
      </View>
    )
}
