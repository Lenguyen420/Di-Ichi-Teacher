import { ProfileHero } from '../../components/Profile/ProfileHero.jsx'
import { ProfileInfo } from '../../components/Profile/ProfileInfo.jsx'
import { ProfileTeaching } from '../../components/Profile/ProfileTeaching.jsx'

export const ProfilePage = () => (
  <div className="space-y-5">
    <ProfileHero />
    <div className="grid gap-5 lg:grid-cols-2">
      <ProfileInfo />
      <ProfileTeaching />
    </div>
  </div>
)
