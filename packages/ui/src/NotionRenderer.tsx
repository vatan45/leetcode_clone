"use client";
import { NotionRenderer as NotionRendererLib } from 'react-notion-x'
import { Code } from 'react-notion-x/build/third-party/code'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

// Week-4-1-647987d9b1894c54ba5c822978377910
export const NotionRenderer = ({ recordMap }: {
    recordMap: any
}) => {
    return <div className=''>
        <div className='rounded-full'>
            <NotionRendererLib components={{
                Code
            }} recordMap={recordMap} fullPage={true} darkMode={true} />
        </div>
    </div>
}