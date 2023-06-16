import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Button } from '@/shared/ui/redesigned/Button'
import { ToggleFeatures } from '@/shared/lib/features'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'

import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader'

import styles from './AddCommentForm.module.scss'

export interface IAddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo(({ className, onSendComment }: IAddCommentFormProps) => {
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text ?? '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Card padding='24' border='partial' max>
            <HStack
              className={classNames(styles.addCommentFormRedesigned, {}, [className])}
              justify='between'
              gap='16'
              max
              data-testid='AddCommentForm'
            >
              <Input
                className={styles.input}
                value={text}
                placeholder={t('enterComment')}
                onChange={onCommentTextChange}
                data-testid='AddCommentForm.Input'
              />
              <Button
                variant='outline'
                onClick={onSendHandler}
                data-testid='AddCommentForm.Button'
              >{t('send')}</Button>
            </HStack>
          </Card>
        }
        off={
          <HStack
            className={classNames(styles.addCommentForm, {}, [className])}
            justify='between'
            max
            data-testid='AddCommentForm'
          >
            <InputDeprecated
              className={styles.input}
              value={text}
              placeholder={t('enterComment')}
              onChange={onCommentTextChange}
              data-testid='AddCommentForm.Input'
            />
            <ButtonDeprecated
              theme='outline'
              onClick={onSendHandler}
              data-testid='AddCommentForm.Button'
            >{t('send')}</ButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
