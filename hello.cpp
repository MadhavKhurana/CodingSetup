#include <stdio.h>
int main()
{
	int n, k, x;
	scanf("%d", &n);
	int a[n];
	for (int i = 0; i < n; i++)
	{
		scanf("%d", &a[i]);
	}
	for (int q = 0; q < n; q++)
	{
		for (int j = 0; j < n; j++)
		{
			if (a[j] > a[j + 1])
			{
				k = a[j];
				a[j] = a[j + 1];
				a[j + 1] = k;
			}
		}
	}
	for (int l = 0; l < n; l++)
	{
		printf("%d ", a[l]);
	}
}
