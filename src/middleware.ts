

export function onRequest (context, next) {
    context.locals.highlighting = "";

    return next();
};