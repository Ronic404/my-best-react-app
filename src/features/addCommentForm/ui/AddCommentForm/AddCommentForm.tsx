import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Input } from '@/shared/ui/deprecated/Input'
import { HStack } from '@/shared/ui/deprecated/Stack'
import { Button } from '@/shared/ui/deprecated/Button'

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
      <HStack
        className={classNames(styles.addCommentForm, {}, [className])}
        justify='between'
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
          theme='outline'
          onClick={onSendHandler}
          data-testid='AddCommentForm.Button'
        >{t('send')}</Button>
      </HStack>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
