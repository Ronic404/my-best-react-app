import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'

import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'

import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'

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
  const error = useSelector(getAddCommentFormError)
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
      <div className={classNames(styles.addCommentForm, {}, [className])}>
        <Input
          className={styles.input}
          value={text}
          placeholder={t('enterComment')}
          onChange={onCommentTextChange}
        />
        <Button theme='outline' onClick={onSendHandler}>{t('send')}</Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
