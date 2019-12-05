import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import styles from './Publicacoes.module.css'

const MOCK = [
  {
    uid: 'me-ouvir-chorar',
    title: 'É lançado o site da Loja Maçônica Acácia da Borborema',
    date: '04/12/2019',
    leitura: '3 minutos de leitura',
  },
]

const renderNoticia = ({ title, uid, date, leitura }) => {
  const [dia, mes, ano] = date.split('/')
  const data = [dia, mes].join('/')
  return (
    <Link
      to={`/${uid}`}
      key={uid}
      className={classnames(
        'pa2 pb3 ma2 dim pointer flex justify-between b',
        styles.noticia
      )}
    >
      <div className="flex flex-column justify-between w-80">
        <span className="f3-ns f4 b pt1 pr1 tl">{title}</span>
        <span className="f6 gray ttu tl">{leitura}</span>
      </div>
      <div className={classnames('flex flex-column b f2 tc')}>
        <span className={styles.data}>{data}</span>
        <span className={styles.ano}>{ano}</span>
      </div>
    </Link>
  )
}
const Publicacoes = ({ noticias = MOCK }) => {
  return (
    <div
      className={classnames(
        'ph2 pb2 flex flex-column items-center',
        styles.container
      )}
    >
      <div className={classnames(styles.inner)}>
        <h2 className={classnames(styles.heading, 'f2 tc mv3 w-100')}>
          Publicações
        </h2>
        {noticias.map(renderNoticia)}
        <div className="flex justify-center">
          <span className="dn tc ttu b mt2 mb3 f4 dim pointer bg-white-50 pa2">
            + Mais
          </span>
        </div>
      </div>
    </div>
  )
}

export default Publicacoes
