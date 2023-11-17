import { useEffect, useState } from 'react'
import { CardGym } from './CardGym'
import axios from 'axios'

export const ListGyms = () => {
  const [listGym, setListGym] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://test-frontend-developer.s3.amazonaws.com/data/locations.json',
      )
      .then(function (response) {
        // manipula o sucesso da requisição
        const data = response.data.locations

        setListGym([...data])
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error)
      })
      .finally(function () {
        // sempre será executado
      })
  }, [])

  return (
    <aside className="flex flex-col  sm:flex-row gap-6 sm:flex-wrap  sm:justify-center">
      {listGym.map((gym) => {
        return (
          <CardGym
            key={gym.id}
            title={gym.title}
            content={gym.content}
            schedules={gym.schedules}
          />
        )
      })}
    </aside>
  )
}
