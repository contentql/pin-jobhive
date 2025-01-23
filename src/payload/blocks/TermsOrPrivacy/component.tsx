import { Params } from '../types'
import { TermsOrPrivacyType } from '@payload-types'
import { payloadSlateToHtmlConfig, slateToHtml } from '@slate-serializers/html'
import { Element } from 'domhandler'
import DOMPurify from 'isomorphic-dompurify'
import React from 'react'

interface TermsOrPrivacyPolicyProps extends TermsOrPrivacyType {
  params: Params
}
const TermsOrPrivacy: React.FC<TermsOrPrivacyPolicyProps> = ({
  params,
  ...block
}) => {
  const html = slateToHtml(block?.content || [], {
    ...payloadSlateToHtmlConfig,
    markMap: {
      ...payloadSlateToHtmlConfig.markMap,
      mark: ['mark'],
      kbd: ['kbd'],
      iframe: ['iframe'],
      pre: ['pre'],
      strong: ['strong'],
    },
    markTransforms: {
      'custom-iframe': ({ node }) => {
        return new Element('iframe', {
          src: node.text,
        })
      },
    },
    elementTransforms: {
      ...payloadSlateToHtmlConfig.elementTransforms,
      upload: ({ node }) => {
        // for video returning video element
        if (node && node?.value) {
          const mimeType = node?.value?.mimeType ?? ''
          if (mimeType.includes('video')) {
            return new Element('video', {
              src: node?.value?.url,
              controls: 'true',
            })
          }
        }

        return payloadSlateToHtmlConfig.elementTransforms.upload({ node })
      },
      link: ({ node, children = [] }) => {
        const attrs: { [key: string]: string } = {}
        if (node.linkType) {
          attrs['data-link-type'] = node.linkType
        }
        if (node.newTab) {
          attrs.target = '_blank'
        }

        attrs['data-disable-nprogress'] = 'true'

        return new Element(
          'a',
          Object.assign(
            {
              href: node.url,
            },
            attrs,
          ),
          children,
        )
      },
    },
  })

  const purifiedHtml = DOMPurify.sanitize(html, {
    ADD_ATTR: ['target'], // Allow the "target" attribute
    ADD_TAGS: ['iframe'], // You can also add other tags if needed (optional)
  })
  return (
    <div className='prose mx-auto max-w-7xl px-6 pt-10 text-text dark:prose-invert lg:px-8'>
      <div dangerouslySetInnerHTML={{ __html: purifiedHtml }} />
    </div>
  )
}

export default TermsOrPrivacy
