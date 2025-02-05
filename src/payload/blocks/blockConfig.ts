// This is just to consolidate all the existing blocks and their respective JSX components
// Always prefer to individually import the required block or JSX in other parts of your application
// Importing the block components and its configurations
import BlogPostsConfig from './BlogPosts/config'
import CompaniesConfig from './Companies/config'
import ContactConfig from './Contact/config'
import ContentConfig from './Content/config'
import DetailsConfig from './Details/config'
import FeaturedJobsConfig from './FeaturedJobs/config'
import FormConfig from './Form/config'
import HeroConfig from './Hero/config'
import ImageBlockConfig from './ImageBlock/config'
import ListConfig from './List/config'
import TeamConfig from './Team/config'
import TermsOrPrivacyConfig from './TermsOrPrivacy/config'
import ValuesConfig from './Values/config'

// Exporting an object that maps block names (as keys) to their corresponding JSX components (as values)
// This object allows dynamic rendering of components based on the block names

// Exporting an array that consolidates all block configurations
// This array is useful for registering or iterating over all blocks and their configurations in one place
export const blocksConfig = [
  DetailsConfig,
  ListConfig,
  FormConfig,
  HeroConfig,
  BlogPostsConfig,
  CompaniesConfig,
  ContentConfig,
  ImageBlockConfig,
  TeamConfig,
  ValuesConfig,
  TermsOrPrivacyConfig,
  FeaturedJobsConfig,
  ContactConfig,
]
