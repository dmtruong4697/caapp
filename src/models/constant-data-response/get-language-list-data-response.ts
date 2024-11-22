export type GetLanguageListResponseItem = {
    code: string,
    flag: string,
    english_name: string,
    native_name: string,
}

export type GetLanguageListResponse = {
    languages: GetLanguageListResponseItem[]
}