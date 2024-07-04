import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export const Error404 = () => {
    const error = useRouteError() as Error;

    if (!isRouteErrorResponse(error)) {
        return null;
    }

  return (
   <div >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
