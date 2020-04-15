# Generated by Django 3.0.4 on 2020-03-21 21:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('login', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('permissions', models.FloatField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Film',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('votes', models.FloatField(default=0)),
                ('rate', models.FloatField(default=0)),
                ('categoryId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='films.Category')),
            ],
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('commentBody', models.TextField()),
                ('createdAt', models.DateField()),
                ('updatedAt', models.DateField()),
                ('filmId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='films.Film')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='films.User')),
            ],
        ),
    ]