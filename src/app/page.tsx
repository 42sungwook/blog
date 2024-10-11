import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PostCard from '@/app/post-card'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="w-100 p-2 flex flex-wrap box-border">
      {posts.map((post, idx) => (
        <PostCard
          key={idx}
          {...post}
        />
      ))}
    </div>
  )
}
