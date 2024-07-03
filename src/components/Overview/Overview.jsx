import { OverviewProjects } from "./ui/OverviewProjects"
import { OverviewBlogRecent } from "./ui/OverviewBlogRecent"
import { OverviewIconTitle } from "./ui/OverviewIconTitle"
import { BLOG_POSTS, PROJECTS } from "../../helpers/logic/variables"
import { OverviewIcon } from "./ui/icons/OverviewIcon"

export function Overview() {
  return (
    <>
      <OverviewIconTitle icon={<OverviewIcon />} />
      <OverviewBlogRecent posts={BLOG_POSTS} />
      <OverviewProjects items={PROJECTS} />
    </>
  )
}
