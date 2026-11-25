# Google Play integration notes

Use official Google OAuth and Google Play Developer APIs only. Never ask users for
their Google account passwords. Use a verified OAuth redirect URI, state validation,
PKCE where supported, narrow scopes, secure token storage, refresh-token rotation/
revocation handling and clear disconnect controls.

API access varies by API, account permissions, app ownership and Google policy.
Some Play Console features or metrics may not be exposed. The UI must show data
freshness and unavailable states instead of inventing values.
