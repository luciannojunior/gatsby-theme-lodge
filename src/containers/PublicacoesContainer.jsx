import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Publicacoes from '../components/Publicacoes'

const getReadingTime = (text = ``) => {
  const AVERAGE = 240
  const words = text.split(` `).length
  const minutes = Math.ceil(words / AVERAGE)
  return `${minutes} minutos de leitura`
}

const PublicacoesContainer = () => {
  const data = useStaticQuery(graphql`
    query NoticiasQuery {
      allPrismicNoticia(
        sort: { fields: first_publication_date, order: DESC }
        limit: 5
      ) {
        nodes {
          uid
          data {
            title {
              text
            }
            conteudo {
              text
            }
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  `)

  const entries = data.allPrismicNoticia.nodes

  const noticias = entries.map(
    ({
      uid,
      data: {
        date,
        title: { text: title },
        conteudo: { text: conteudo },
      },
    }) => {
      return {
        uid,
        date,
        title,
        leitura: getReadingTime(conteudo),
      }
    }
  )

  return <Publicacoes noticias={noticias} />
}

export default PublicacoesContainer
