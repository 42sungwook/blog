import { Post } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="flex flex-col h-[300px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-[1rem] gap-2 group overflow-hidden"
    >
      <div className="flex w-full h-[200px] justify-center overflow-hidden rounded-md relative">
        <Image
          src={post.thumbnail}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <h2 className="mb-1 text-xl transition-colors duration-300 group-hover:text-sky-500">
        {post.title}
      </h2>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 transition-colors duration-300 group-hover:text-sky-500"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </Link>
  )
}

export default PostCard
