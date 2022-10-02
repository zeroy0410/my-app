#include<stdio.h>
using namespace std;
int main(){
	int ch=0;
	while((ch=getchar())!=EOF){
		printf("%c\n",ch+32);
		getchar();
	}
	return 0;
}
