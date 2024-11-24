import Chat from "@/components/pages/chat/chat"

const icon = 'https://cdn.discordapp.com/attachments/1112753458165063701/1143802578363236433/visual2.jpg?ex=67442129&is=6742cfa9&hm=9a92d7d775eb5681917bdc49f5648e77d2593270c9450e9c3b2f012fc4cf4d68&'

export const metadata = {
  title: 'Tether',
  description: 'Instant, effortless, and real-time conversations.',
  openGraph: {
    title: 'Tether', 
    description: 'Instant, effortless, and real-time conversations.',
    images: [
      {
        url: icon,
        width: 800,
        height: 600,
        alt: 'Tether Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tether',
    description: 'Instant, effortless, and real-time conversations.',
    images: [icon],
  },
  icons: {
    icon: icon,
  },
}

export default function page() {

  return (
    <div className="h-screen flex items-center justify-center bg-transparent">
      <Chat />
    </div>
  )
}
