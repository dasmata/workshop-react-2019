import React, { Suspense } from 'react';


const LazyLoaded = React.lazy(()=>import("./LazyLoaded"));

export default ()=>(
    <Suspense fallback={<div>Loading...</div>}>
        <LazyLoaded />
    </Suspense>
)