import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import logo from './assets/Мастер пол.png'
import PartnerCard from './components/PartnerCard'

const App = () => {
  const navigate = useNavigate()
  const [partners, setPartners] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setIsLoading(true)
        const res = await window.api.getPartners()
        setPartners(res)
      } catch (err) {
        setError('Ошибка при загрузке партнеров')
        console.error('Error fetching partners:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPartners()
  }, [])

  const handlePartnerClick = (partner) => {
    navigate('/update', { state: { partner } })
  }

  if (isLoading) {
    return <div className="loading">Загрузка...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="app-container">
      <header className="page-heading">
        <img className="page-logo" src={logo} alt="Логотип" />
        <h1>Партнеры</h1>
      </header>

      <div className="add-btn-container">
          <Link to="/create">
            <button className="create-btn btn" style={{ marginTop: '0' }}>
              Создать партнера
            </button>
          </Link>
        </div>

      <main>
        <ul className="partners-list">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              onClick={() => handlePartnerClick(partner)}
            />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
