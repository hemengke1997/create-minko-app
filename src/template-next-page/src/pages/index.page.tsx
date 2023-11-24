import { type GetServerSidePropsContext } from 'next'
import { useTranslations } from 'next-intl'
import { _getServerSideProps } from '@/server/getServerSideProps'

export default function Home() {
  const t = useTranslations()

  return (
    <div>
      <div>{t('home.test')}</div>
      <div>{t('common.test')}</div>
    </div>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    return _getServerSideProps({
      messages: ['home'], // 页面使用到的翻译namespaces
      tdk: '/',
    })(ctx)
  } catch (e) {
    console.error(e)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}
