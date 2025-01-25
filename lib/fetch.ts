class FetchService {
    private static async request(
      url: string, 
      options: RequestInit = {},
      retry = true
    ): Promise<Response> {
      const accessToken = sessionStorage.getItem('accessToken');
      
      const headers = new Headers(options.headers || {});
      if (accessToken) {
        headers.append('Authorization', `Bearer ${accessToken}`);
      }
  
      try {
        const response = await fetch(url, {
          ...options,
          headers,
        });
  
        // Handle unauthorized access (token expired)
        if (response.status === 401 && retry) {
          await this.refreshTokens();
          return this.request(url, options, false);
        }
  
        return response;
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }
    }
  
    // Token Refresh Method
    private static async refreshTokens(): Promise<void> {
      const refreshToken = sessionStorage.getItem('refreshToken');
      if (!refreshToken) {
        // Redirect to login or handle logout
        throw new Error('No refresh token available');
      }
  
      try {
        const response = await fetch('/api/refresh-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken }),
        });
  
        if (!response.ok) {
          throw new Error('Token refresh failed');
        }
  
        const { accessToken, refreshToken: newRefreshToken } = await response.json();
  
        // Update session storage
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', newRefreshToken);
      } catch (error) {
        // Clear tokens and redirect to login
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }
  
    // GET Request
    static async get(url: string, options: RequestInit = {}) {
      return this.request(url, { ...options, method: 'GET' });
    }
  
    // POST Request
    static async post(url: string, body: any, options: RequestInit = {}) {
      return this.request(url, {
        ...options,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(body),
      });
    }
  
    // Add other methods as needed (PUT, DELETE, etc.)
  }
  
  export default FetchService;