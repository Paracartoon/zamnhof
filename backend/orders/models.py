from django.db import models
from django.contrib import admin
from django.conf import settings
from django.utils import timezone
import datetime

Today = datetime.datetime.now().date()



class Ordine(models.Model):
	nome = models.CharField(max_length=200)
	cognome = models.CharField(max_length=200)
	prezzo_totale = models.IntegerField(default=0, blank=True)
	commento = models.CharField(max_length=200, blank=True, null=True)
	data_ora_richiesta = models.CharField(max_length=200)
	telefono = models.CharField(max_length=300)
	indirizzo = models.CharField(max_length=400)
	consegnato = models.BooleanField(default=False)

	def __str__(self):
		return self.nome+' '+self.cognome+', '+str(self.data_ora_richiesta)

	class Meta:
		verbose_name_plural = "Ordini"
		verbose_name = "Ordine"




class OrdineAdmin(admin.ModelAdmin):

	
	list_display = ('cognome', 'telefono', 'data_ora_richiesta', 'prezzo_totale')
	readonly_fields = ('nome','cognome','telefono','indirizzo','prezzo_totale','commento','data_ora_richiesta')


class Articolo(models.Model):
	ordine = models.ForeignKey(Ordine, on_delete=models.CASCADE)
	titolo = models.CharField(max_length=300, null=True)
	prezzo = models.CharField(max_length=300, null=True)
	quantita = models.IntegerField(default=0, blank=True) 





admin.site.register(Ordine, OrdineAdmin)